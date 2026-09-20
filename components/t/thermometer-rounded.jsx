import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pk14uthrc {
  fill: currentColor;
  d: path("M12 20q-1.671 0-2.835-1.164Q8 17.67 8 16q0-1.084.544-1.987T10 12.539V6q0-.846.577-1.423T12 4t1.423.577T14 6v6.539q.912.57 1.446 1.474q.535.903.554 1.987q-.02 1.671-1.184 2.836T12 20m-1-10h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z");
}
</style><path class="pk14uthrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:thermometer-rounded"} {...others} />);
}

export default Component;
