import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xi6mprboa {
  fill: currentColor;
  d: path("M6 8.829v6.342a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2 0m11.707-5.536L19 4.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L20.414 6l1.293 1.293a.999.999 0 1 1-1.414 1.414L19 7.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L17.586 6l-1.293-1.293a.999.999 0 1 1 1.414-1.414M18 12a1 1 0 0 1 2 0v3.171a3 3 0 1 1-2 0Z");
}
</style><path class="xi6mprboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-pull-request-closed-fill-sharp"} {...others} />);
}

export default Component;
