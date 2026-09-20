import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o9wmnkk8c {
  fill: currentColor;
  d: path("M8.192 8V5.385h1V8zm0 8.116v-4.347h1v4.347zM5 21V3h14v18zm1-1h12v-9.615H6zM6 9.385h12V4H6z");
}
</style><path class="o9wmnkk8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:kitchen-outline-sharp"} {...others} />);
}

export default Component;
