import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okh68-bde.css';
import '../../css/c/cagb5gb_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="okh68-bde"/><path class="cagb5gb_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:photoshop"} {...others} />);
}

export default Component;
