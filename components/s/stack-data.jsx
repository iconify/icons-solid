import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xbt3txpvy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 2.25h12q2.75 0 2.75 2.75T18 7.75H6Q3.25 7.75 3.25 5T6 2.25m12 7H6q-2.75 0-2.75 2.75T6 14.75h12q2.75 0 2.75-2.75T18 9.25m-12 7h12q2.75 0 2.75 2.75T18 21.75H6q-2.75 0-2.75-2.75T6 16.25");
}
</style><path class="xbt3txpvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:stack-data"} {...others} />);
}

export default Component;
