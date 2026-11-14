import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6yx8uzyl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.375 1.75H5.625q-1.398 0-2.386.989q-.989.988-.989 2.386v2.75q0 1.398.989 2.386q.988.989 2.386.989h12.75q3.375 0 3.375-3.375v-2.75q0-3.375-3.375-3.375m-12.75 11h12.75q3.375 0 3.375 3.375v2.75q0 3.375-3.375 3.375H5.625q-1.398 0-2.386-.989q-.989-.988-.989-2.386v-2.75q0-1.398.989-2.386q.988-.989 2.386-.989");
}
</style><path class="m6yx8uzyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:over-under-3d"} {...others} />);
}

export default Component;
