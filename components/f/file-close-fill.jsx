import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch1todbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ch1todbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-close-fill"} {...others} />);
}

export default Component;
