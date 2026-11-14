import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qxxp6gb7z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.875 2.25h-2.25q-1.398 0-2.386.989q-.989.988-.989 2.386v2.25q0 1.398.989 2.386q.988.989 2.386.989h2.25q3.375 0 3.375-3.375v-2.25q0-1.398-.989-2.386q-.988-.989-2.386-.989m8.25 0h2.25q1.398 0 2.386.989q.989.988.989 2.386v2.25q0 3.375-3.375 3.375h-2.25q-3.375 0-3.375-3.375v-2.25q0-1.398.989-2.386q.988-.989 2.386-.989m-8.25 10.5h-2.25q-1.398 0-2.386.989q-.989.988-.989 2.386v2.25q0 1.398.989 2.386q.988.989 2.386.989h2.25q3.375 0 3.375-3.375v-2.25q0-3.375-3.375-3.375m8.25 0h2.25q3.375 0 3.375 3.375v2.25q0 3.375-3.375 3.375h-2.25q-3.375 0-3.375-3.375v-2.25q0-3.375 3.375-3.375");
}
</style><path class="qxxp6gb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:layout-grid"} {...others} />);
}

export default Component;
