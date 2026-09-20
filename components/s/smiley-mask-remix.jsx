import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq2o04i_v.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="gq2o04i_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:smiley-mask-remix"} {...others} />);
}

export default Component;
