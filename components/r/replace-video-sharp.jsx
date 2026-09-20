import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oz69kacll {
  fill: currentColor;
  d: path("M3.5 8q.95-2.725 3.288-4.362T12 2q2.05 0 3.888.875T19 5.35V2h2v6h-6V6h1.9q-.975-.975-2.25-1.487T12 4Q9.975 4 8.262 5.075T5.676 8zM5 22V10h12v5l3-3v8l-3-3v5z");
}
</style><path class="oz69kacll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:replace-video-sharp"} {...others} />);
}

export default Component;
