import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjrb-gbdh.css';
import '../../css/r/rkdm0ob1v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gjrb-gbdh"/><path class="rkdm0ob1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-boat-success"} {...others} />);
}

export default Component;
