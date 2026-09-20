import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e62wtrb5d.css';
import '../../css/s/sksbtdbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e62wtrb5d"/><path class="sksbtdbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:book-1"} {...others} />);
}

export default Component;
