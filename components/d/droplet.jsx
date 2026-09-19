import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ujzbi0bos {
  fill: currentColor;
  d: path("M31.993 2C20.563 17.624 14 32.007 14 43.827C14 53.859 22.064 62 32.001 62C41.946 62 50 53.859 50 43.827C50 32.007 43.245 17.383 31.993 2");
}
</style><path class="ujzbi0bos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:droplet"} {...others} />);
}

export default Component;
