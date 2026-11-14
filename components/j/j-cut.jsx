import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i73onsbsi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.125 2.25h7.75q1.398 0 2.386.989q.989.988.989 2.386v3.75q0 1.398-.989 2.386q-.988.989-2.386.989h-7.75q-1.398 0-2.386-.989q-.989-.988-.989-2.386v-3.75q0-1.398.989-2.386q.988-.989 2.386-.989m4.274 3.611q-.913-.454-1.78.082q-.868.536-.869 1.558q.001 1.02.869 1.556q.868.537 1.78.082l.186-.093q.956-.477.956-1.546t-.957-1.547l-.184-.091zm-.524 8.389h-9.75q-1.398 0-2.386.989q-.989.988-.989 2.386v.75q0 3.375 3.375 3.375h9.75q3.375 0 3.375-3.375v-.75q0-3.375-3.375-3.375");
}
</style><path class="i73onsbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:j-cut"} {...others} />);
}

export default Component;
