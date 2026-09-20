import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jmkl64b5s {
  fill: currentColor;
  d: path("M20 14.212V9.269q0-1.019-.702-1.721t-1.721-.702H6.769v-2.23q0-.691.463-1.154T8.384 3h11q.691 0 1.153.462T21 4.615v8.154q0 .517-.28.903t-.72.54M4.616 21q-.691 0-1.153-.462T3 19.385v-8.539q0-.69.463-1.153t1.152-.462h11.539q.613 0 1.037.424q.425.424.425 1.018v8.712q0 .69-.463 1.152T16 21z");
}
</style><path class="jmkl64b5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:select-window-2-rounded"} {...others} />);
}

export default Component;
