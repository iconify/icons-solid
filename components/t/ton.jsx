import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ijzqncu0d {
  fill: var(--svg-color--08c, #08c);
  d: path("m20.661 7.22l-7.846 12.494a1.058 1.058 0 0 1-1.794-.006L3.328 7.214A2.2 2.2 0 0 1 3 6.05a2.29 2.29 0 0 1 2.324-2.255h13.362C19.963 3.794 21 4.8 21 6.044c0 .413-.116.82-.339 1.175M5.218 6.8l5.723 8.826V5.912H5.816c-.592 0-.857.392-.598.89m7.84 8.826L18.783 6.8c.265-.497-.006-.89-.599-.89H13.06z");
}
</style><path class="ijzqncu0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ton"} {...others} />);
}

export default Component;
