import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3mdw_zyn {
  d: path("m6.75 11.25l1 1l2-2m2.25 1h5M6.75 15h3v3h-3ZM12 16.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wvxot9bme {
  d: path("M4 4.5h16v17H4Zm4-2v4m4-4v4m4-4v4");
}
</style><g class="ulnmmdpxh"><path class="wvxot9bme"/><path class="d3mdw_zyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:staff-task-list"} {...others} />);
}

export default Component;
