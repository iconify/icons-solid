import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb-ml4nyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nb-ml4nyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tree-catalog-filled"} {...others} />);
}

export default Component;
