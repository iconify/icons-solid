import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xeszhwg9n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m17.03 3.231l3.739 3.739q.989.988.989 2.386v5.288q0 1.398-.989 2.386l-3.739 3.739q-.988.989-2.386.989H9.356q-1.398 0-2.386-.989L3.231 17.03q-.989-.988-.989-2.386V9.356q0-1.398.989-2.386L6.97 3.231q.988-.989 2.386-.989h5.288q1.398 0 2.386.989");
}
</style><path class="xeszhwg9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:octagon"} {...others} />);
}

export default Component;
