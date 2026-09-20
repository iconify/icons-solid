import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo75yt2ib {
  fill: currentColor;
  d: path("M20.808 22.223L18.585 20H4.615q-.69 0-1.152-.462T3 18.384V8.616q0-.691.463-1.153T4.615 7H7l1 1H4.616q-.231 0-.424.192T4 8.616v9.769q0 .23.192.423t.423.192H17.58L2.546 3.962l.708-.708l18.262 18.262zM21 18.265l-1-1v-8.65q0-.23-.192-.423T19.385 8h-8.65L9 6.266v-.65q0-.691.463-1.153T10.616 4h2.769q.69 0 1.153.463T15 5.615V7h4.385q.69 0 1.152.463T21 8.616zM10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zm2.085 6.5");
}
</style><path class="bo75yt2ib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:enterprise-off-outline"} {...others} />);
}

export default Component;
