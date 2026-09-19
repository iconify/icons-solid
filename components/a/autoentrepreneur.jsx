import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rhjgmkbjs {
  fill: none;
  stroke: currentColor;
  d: path("M23.526 14.073a8.573 8.573 0 1 1-17.146 0a8.573 8.573 0 0 1 17.146 0Z");
}

.zazlnzy_n {
  fill: none;
  stroke: currentColor;
  d: path("M42.477 24a18.5 18.5 0 0 1-36.952 1.32c-.034-.463.347-.869.855-.869h16.244c1.004 0 1.783-.81 1.852-1.771A18.5 18.5 0 0 1 35.849 6.908a18.5 18.5 0 0 1 5.76-1.361c.462-.033.869.348.869.855z");
}
</style><path class="rhjgmkbjs"/><path class="zazlnzy_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:autoentrepreneur"} {...others} />);
}

export default Component;
