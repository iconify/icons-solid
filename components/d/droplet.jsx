import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.mmft6ibhi {
  fill: var(--svg-color--5dadec, #5dadec);
  d: path("M28.344 17.768L18.148 1.09L8.7 17.654c-2.2 3.51-2.392 8.074-.081 11.854c3.285 5.373 10.363 7.098 15.811 3.857c5.446-3.24 7.199-10.22 3.914-15.597");
}
</style><path class="mmft6ibhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:droplet"} {...others} />);
}

export default Component;
