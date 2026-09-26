import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blxiygbzj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 2C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2H18ZM7.53809 6.5C6.38391 6.50015 5.61288 7.74116 6.19629 8.7793L10.6582 16.7168C11.2452 17.7611 12.7548 17.7611 13.3418 16.7168L17.8037 8.7793C18.3871 7.74116 17.6161 6.50015 16.4619 6.5H7.53809Z");
}
</style><path clip-rule="evenodd" class="blxiygbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-caret-down-fill"} {...others} />);
}

export default Component;
