import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o8ye7hbnh {
  fill-rule: evenodd;
  d: path("M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18m1.5 7.5L15 12l-4.5 4.5L12 18l6-6l-1.5-1.5zM6 12l3 3l1.5-1.5L9 12l4.5-4.5L12 6z");
}
</style><path clip-rule="evenodd" class="o8ye7hbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:genesis-l1"} {...others} />);
}

export default Component;
