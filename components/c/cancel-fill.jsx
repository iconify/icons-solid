import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q40v_abfh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q40v_abfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:cancel-fill"} {...others} />);
}

export default Component;
