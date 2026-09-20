import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eosxhobfh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eosxhobfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:relation-zero-or-one-to-one-or-many"} {...others} />);
}

export default Component;
