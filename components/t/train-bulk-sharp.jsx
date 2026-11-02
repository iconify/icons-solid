import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3lapab3s {
  d: path("M9 13h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2m-6.106 4.447l-2 4a1 1 0 1 1-1.788-.894l2-4a1 1 0 1 1 1.788.894m8-.894l2 4a1 1 0 1 1-1.788.894l-2-4a1 1 0 1 1 1.788-.894");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xlujlh96l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 6v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6c0-.265.105-.52.293-.707l3-3A1 1 0 0 1 8 2h8c.265 0 .52.105.707.293l3 3A1 1 0 0 1 20 6M6 6.414V9h12V6.414L15.586 4H8.414Z");
}
</style><g class="cuyn6tgcc"><path class="xlujlh96l"/><path class="b3lapab3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:train-bulk-sharp"} {...others} />);
}

export default Component;
