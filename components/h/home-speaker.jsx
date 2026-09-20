import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mo6snzkcz {
  fill: currentColor;
  d: path("m7.027 12.404l.737-5.748q.03-.217.154-.391t.336-.255l6.727-2.766q.373-.161.711.043t.389.61l.96 8.507zM9.767 20Q8.25 20 7.3 18.82t-.738-2.71l.344-2.706H17.15l.3 2.794q.162 1.511-.763 2.657T14.25 20z");
}
</style><path class="mo6snzkcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:home-speaker"} {...others} />);
}

export default Component;
