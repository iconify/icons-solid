import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cacmi2bmi {
  d: path("M13 3H9L6 6v15h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lxtc-wp5b {
  d: path("m10 10 4 4");
}

.pux-8e3tz {
  fill: currentColor;
  d: path("M13 3H9L6 6v15h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s-cqkabbd {
  d: path("m14 10 -4 4");
}
</style><g class="hntgybcog"><path class="pux-8e3tz"/><path class="cacmi2bmi"/><path class="lxtc-wp5b"/><path class="s-cqkabbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mcp-error-duotone-thin"} {...others} />);
}

export default Component;
