import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp9i4h5xb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lp9i4h5xb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:yandex"} {...others} />);
}

export default Component;
