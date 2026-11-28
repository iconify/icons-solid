import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7762mx7h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16 6C16 8.209 14.2091 10 12 10C9.7909 10 8 8.209 8 6C8 3.791 9.7909 2 12 2C14.2091 2 16 3.791 16 6ZM11 12H13C16.866 12 20 15.134 20 19V20C20 21.105 19.1046 22 18 22H6C4.8954 22 4 21.105 4 20V19C4 15.134 7.134 12 11 12Z");
}
</style><path clip-rule="evenodd" class="t7762mx7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:user-fill"} {...others} />);
}

export default Component;
