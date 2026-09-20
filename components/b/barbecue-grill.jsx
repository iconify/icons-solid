import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3jbr2e9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v3jbr2e9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:barbecue-grill"} {...others} />);
}

export default Component;
