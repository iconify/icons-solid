import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.qmk-fqbto {
  d: path("M16.866 9.644c.23.764.345 1.558.345 2.356s-.115 1.592-.345 2.356a8.2 8.2 0 0 1-1.034 2.199a1 1 0 0 1-1.664-1.11a6.21 6.21 0 0 0 0-6.89a1 1 0 0 1 .277-1.387a1 1 0 0 1 1.387.277a8.2 8.2 0 0 1 1.034 2.199");
}

.tw7y6mbhw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 4v16a1.002 1.002 0 0 1-1.707.707L6.586 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3.586l3.707-3.707A1 1 0 0 1 12 4");
}
</style><g class="cuyn6tgcc"><path class="tw7y6mbhw"/><path class="qmk-fqbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:volume-low-bulk-sharp"} {...others} />);
}

export default Component;
