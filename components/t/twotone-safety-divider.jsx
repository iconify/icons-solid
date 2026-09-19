import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ze5f5-rhb {
  fill: currentColor;
  d: path("M11 5h2v14h-2zm-6 7c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 1 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85M19 12c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 15 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85");
}
</style><path class="ze5f5-rhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-safety-divider"} {...others} />);
}

export default Component;
