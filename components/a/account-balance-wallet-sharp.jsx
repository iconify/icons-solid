import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqkbpbbrr {
  fill: currentColor;
  d: path("M3 21V3h18v2H9v14h12v2zm8-4V7h11v10zm6.075-3.925Q17.5 12.65 17.5 12t-.425-1.075T16 10.5t-1.075.425T14.5 12t.425 1.075T16 13.5t1.075-.425");
}
</style><path class="cqkbpbbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:account-balance-wallet-sharp"} {...others} />);
}

export default Component;
