import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lrrbmjb6g {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM8 7C7.4477 7 7 7.4477 7 8C7 8.5523 7.4477 9 8 9L10.6667 9C11.219 9 11.6667 8.5523 11.6667 8C11.6667 7.4477 11.219 7 10.6667 7ZM8 11C7.4477 11 7 11.4477 7 12C7 12.5523 7.4477 13 8 13L16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11ZM8 15C7.4477 15 7 15.4477 7 16C7 16.5523 7.4477 17 8 17L13.3333 17C13.8856 17 14.3333 16.5523 14.3333 16C14.3333 15.4477 13.8856 15 13.3333 15Z");
}
</style><path clip-rule="evenodd" class="lrrbmjb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-bar-chart-horizontal-start-fill"} {...others} />);
}

export default Component;
