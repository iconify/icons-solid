import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aly8xt7ds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aly8xt7ds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:folder-remove-fill"} {...others} />);
}

export default Component;
