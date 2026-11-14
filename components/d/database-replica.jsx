import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jbr9u5bid {
  d: path("M8.5 12v7a6 2.5 0 0 0 12 0v-7M3 4.5a6 2.25 0 1 0 12 0a6 2.25 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqqyh46ln {
  d: path("M3 4.5v8a6 2.25 0 0 0 2.5 1.75");
}

.ycz4a2bup {
  d: path("M8.5 12a6 2.5 0 1 0 12 0a6 2.5 0 1 0-12 0Z");
}
</style><g class="ulnmmdpxh"><path class="ycz4a2bup"/><path class="jbr9u5bid"/><path class="xqqyh46ln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:database-replica"} {...others} />);
}

export default Component;
