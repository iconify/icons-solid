import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kb9z25b5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.56 3.84l4.88 3.57l.81.59v8l-.81.59l-4.88 3.57l-.81.59V3.25zm17.69.41v16.5l-.81-.59l-4.88-3.57l-.81-.59V8l.81-.59l4.88-3.57l.81-.59zM12 10v4");
}
</style><path class="kb9z25b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:autoencoder-sharp"} {...others} />);
}

export default Component;
