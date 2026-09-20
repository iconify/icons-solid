import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0sto2usv.css';
import '../../css/l/lhhhg9ebv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0sto2usv"/><path class="lhhhg9ebv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:temple-of-heaven-fill"} {...others} />);
}

export default Component;
