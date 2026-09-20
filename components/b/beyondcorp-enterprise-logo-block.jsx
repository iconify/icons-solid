import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw-y_2o8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cw-y_2o8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:beyondcorp-enterprise-logo-block"} {...others} />);
}

export default Component;
