import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekhdbz4pd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ekhdbz4pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:router-x"} {...others} />);
}

export default Component;
