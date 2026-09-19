import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnpzzt4xm.css';
import '../../css/b/bq6s9dbyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnpzzt4xm"/><path class="bq6s9dbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:washer"} {...others} />);
}

export default Component;
