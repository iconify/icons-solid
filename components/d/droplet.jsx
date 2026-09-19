import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.iozrvmbhw {
  fill: var(--svg-color--75d6ff, #75d6ff);
  d: path("M32 2C20.6 17.6 14 32 14 43.8c0 10 8.1 18.2 18 18.2s18-8.1 18-18.2C50 32 43.2 17.4 32 2");
}
</style><path class="iozrvmbhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:droplet"} {...others} />);
}

export default Component;
