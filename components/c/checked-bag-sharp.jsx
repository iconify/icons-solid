import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s3xw3800t {
  fill: currentColor;
  d: path("M8.192 16.385V7h1.423q0-.98.702-1.683q.702-.702 1.683-.702t1.683.702T14.385 7h1.423v9.385zM10.5 7h3q0-.65-.425-1.075T12 5.5t-1.075.425T10.5 7m6.192 9.385V7H19v9.385zM5 16.385V7h2.308v9.385zm-1.616 3v-1h17.232v1z");
}
</style><path class="s3xw3800t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:checked-bag-sharp"} {...others} />);
}

export default Component;
