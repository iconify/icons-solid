import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gtqww9tcw {
  fill: currentColor;
  d: path("M4 20V4h16v3h-9v10h9v3zm8-4V8h9v8zm5.075-2.925Q17.5 12.65 17.5 12t-.425-1.075T16 10.5t-1.075.425T14.5 12t.425 1.075T16 13.5t1.075-.425");
}
</style><path class="gtqww9tcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:account-balance-wallet-sharp"} {...others} />);
}

export default Component;
