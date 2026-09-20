import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.whik5k-ps {
  fill: currentColor;
  d: path("m14.673 18.327l-.713-.688l5.157-5.158H3v-1h16.137l-5.152-5.158l.688-.688l6.346 6.346z");
}
</style><path class="whik5k-ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:east-sharp"} {...others} />);
}

export default Component;
