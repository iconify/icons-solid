import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb2yg1baz.css';
import '../../css/q/qzo006suv.css';

const viewBox = {"width":12,"height":12};
const content = `<circle class="nb2yg1baz"/><path class="qzo006suv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:sun-fill-12"} {...others} />);
}

export default Component;
