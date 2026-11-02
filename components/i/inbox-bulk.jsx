import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hyle18ydz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}

.ipyj7kzye {
  d: path("M6 12c1.039 0 1.992.578 2.707 1.293l1 1c.313.312.825.707 1.293.707h2c.468 0 .98-.395 1.293-.707l1-1C16.008 12.578 16.961 12 18 12h3a1 1 0 0 1 0 2h-3c-.468 0-.98.395-1.293.707l-1 1C14.992 16.422 14.039 17 13 17h-2c-1.039 0-1.992-.578-2.707-1.293l-1-1C6.98 14.395 6.468 14 6 14H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="hyle18ydz"/><path class="ipyj7kzye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:inbox-bulk"} {...others} />);
}

export default Component;
