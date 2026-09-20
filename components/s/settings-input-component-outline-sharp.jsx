import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wnw0w2nzo {
  fill: currentColor;
  d: path("M3.904 22v-4.458L2 15.638V6.174h1.904V2h1v4.173h1.904v9.466l-1.904 1.903V22zm7.596 0v-4.458L9.596 15.64V6.173H11.5V2h1v4.173h1.904v9.466L12.5 17.542V22zm7.596 0v-4.458l-1.904-1.903V6.173h1.904V2h1v4.173H22v9.466l-1.904 1.903V22zM3 7.173v4.693h2.808V7.173zm7.596 0v4.693h2.808V7.173zm7.596 0v4.693H21V7.173zM4.404 16.616l1.404-1.404v-2.346H3v2.346zm7.596 0l1.404-1.404v-2.346h-2.808v2.346zm7.596 0L21 15.212v-2.346h-2.808v2.346zm0-4.25");
}
</style><path class="wnw0w2nzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:settings-input-component-outline-sharp"} {...others} />);
}

export default Component;
