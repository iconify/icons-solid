import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-liyxb5n {
  fill: currentColor;
  d: path("M6 21V8.673h12V21zm5.27-2.558h1.46v-.769h-1.46zm.018-1.769h1.423q0-.475.142-.91q.141-.436.397-.83q.223-.367.42-.75t.195-.81q0-.784-.54-1.328T12 11.5q-.792 0-1.338.54q-.547.539-.547 1.333q0 .423.2.805t.416.749q.255.4.406.836t.151.91M6.904 6.712v-.885h10.173v.885zm.923-2.827V3h8.327v.885z");
}
</style><path class="y-liyxb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:batch-prediction-sharp"} {...others} />);
}

export default Component;
