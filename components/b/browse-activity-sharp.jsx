import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.atmuzqb6c {
  fill: currentColor;
  d: path("M1 21v-2h22v2zm1-3v-7h5.375l2 4h1.2l3.375-5.875l.925 1.875H22v7zm8.075-6.125L8.6 9H2V3h20v6h-5.875l-1.5-3h-1.2z");
}
</style><path class="atmuzqb6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:browse-activity-sharp"} {...others} />);
}

export default Component;
