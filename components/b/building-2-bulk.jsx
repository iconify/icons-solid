import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.iegcawb5o {
  d: path("M21 21H3a1 1 0 0 1 0-2h8v-8c0-.265.105-.52.293-.707l1-1.001a2.415 2.415 0 0 1 3.414.001l3 3C19.423 13.008 20 13.961 20 15v4h1a1 1 0 0 1 0 2m-8-2h5v-4.003c-.002-.466-.39-.972-.707-1.29l-3-3a.415.415 0 0 0-.586 0l-.707.707Z");
}

.ou5c_6b_n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 21H5a1 1 0 0 1-1-1V6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1");
}
</style><g class="cuyn6tgcc"><path class="ou5c_6b_n"/><path class="iegcawb5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-2-bulk"} {...others} />);
}

export default Component;
