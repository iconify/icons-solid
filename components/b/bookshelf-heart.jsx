import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mc5dx17vz {
  d: path("m18.5 21.5l-2.75-3a2 2 0 0 1 2.75-2.25a2 2 0 0 1 2.75 2.25Z");
}

.pd4d9ebtq {
  d: path("M13.8 20.5H2.5v-18h17v10.7m-17-1.7h17M6 5.5v6m2.75-6v6m3-5.5l2.75 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pd4d9ebtq"/><path class="mc5dx17vz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bookshelf-heart"} {...others} />);
}

export default Component;
