import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tdl4uwbvy {
  d: path("M18.75 8.75v-4.5h-3m-7.5 0h-3v16.5H9");
}

.unbpaukwd {
  d: path("M8.25 2.75h7.5v3.5h-7.5zm4 9h9v9.5h-9zm2.5 3.5h4m-4 2.75h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tdl4uwbvy"/><path class="unbpaukwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:paste-sharp"} {...others} />);
}

export default Component;
