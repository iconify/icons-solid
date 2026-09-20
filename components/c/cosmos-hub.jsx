import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9p35ebyv.css';
import '../../css/t/tn1bqmqhf.css';
import '../../css/f/fle4ekbxc.css';
import '../../css/m/m2bcqj2zn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k9p35ebyv"/><path clip-rule="evenodd" class="tn1bqmqhf"/><path class="fle4ekbxc"/><path clip-rule="evenodd" class="m2bcqj2zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cosmos-hub"} {...others} />);
}

export default Component;
